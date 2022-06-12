import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { HomeService } from 'src/app/@Shared/Services/home.services';
import { Home } from 'src/app/models/home.model';
import { StoreHomeActions } from 'src/app/store/Home/home-action';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Navigation]);
SwiperCore.use([Pagination, Autoplay]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  homeContent!: Home;
  private unSubscribe!: Subscription;
  isLoading: boolean = false;
  // swiperConfig: any = {
  //   slidesPerView: 1,
  //   spaceBetween: 20,
  //   breakpoints: {
  //     1025: {
  //       slidesPerView: 2,
  //     }
  //   }
  // }
  constructor(private store: Store<{ home: Home }>,
    private homeService: HomeService) { }

  ngOnInit(): void {
    this.getAllData()
  }
  getAllData() {
    this.store.select('home').subscribe((home) => {
      this.homeContent = home;
      if (!this.homeContent) {
        this.isLoading = true;
        this.unSubscribe = this.homeService
          .getReq('/api/branches//homepage/')
          .subscribe((res: any) => {
            this.store.dispatch(new StoreHomeActions(res));
            this.isLoading = false;
          }, (error) => {
            this.isLoading = false
          });
      }
    });
  }
  ngOnDestroy(): void {
    if (this.unSubscribe) {
      this.unSubscribe.unsubscribe();
    }
  }
}
