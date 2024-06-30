import { Component, OnInit } from '@angular/core';
import { AdService } from '../../../services/ad/ad.service';
import { TAdvertisement } from '../../../types/data/advertisement';
import { AvatarComponent } from '../avatar/avatar.component';
import { MatIcon } from '@angular/material/icon';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-ads',
  standalone: true,
  imports: [AvatarComponent, MatIcon, NgStyle],
  templateUrl: './ads.component.html',
  styleUrl: './ads.component.scss',
})
export class AdsComponent implements OnInit {
  actions: string[] = ['Visit Now'];
  advertisement: TAdvertisement | undefined;

  constructor(public adService: AdService) {}

  ngOnInit(): void {
    this.adService.get();
    const randomAdIndex: number = Math.floor(
      Math.random() * this.adService.advertisements.length
    );
    this.advertisement = this.adService.advertisements[randomAdIndex];
  }

  onVisitClick() {
    window.open(this.advertisement?.companyLink, '_blank');
  }
}
