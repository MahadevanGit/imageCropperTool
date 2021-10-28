import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { LyImageCropperModule } from '@alyle/ui/image-cropper';
import { LySliderModule } from '@alyle/ui/slider';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ImageCropperExampleComponent } from './image-cropper-example/image-cropper-example.component';

/** Alyle UI */
import {
  LyTheme2,
  StyleRenderer,
  LY_THEME,
  LY_THEME_NAME,
  LY_THEME_GLOBAL_VARIABLES,
  LyHammerGestureConfig
} from '@alyle/ui';
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';

import { color } from '@alyle/ui/color';

export class GlobalVariables {
  testVal = color(0x00bcd4);
  Quepal = {
    default: `linear-gradient(135deg,#11998e 0%,#38ef7d 100%)`,
    contrast: color(0xffffff),
    shadow: color(0x11998e)
  };
  SublimeLight = {
    default: `linear-gradient(135deg,#FC5C7D 0%,#6A82FB 100%)`,
    contrast: color(0xffffff),
    shadow: color(0xB36FBC)
  };
  Amber = {
    default: color(0xffc107),
    contrast: color(0, 0, 0, 0.87)
  };
}


const appRoutes: Routes = [
  { path: 'image-cropper', component: ImageCropperExampleComponent },
  { path: '', component: ImageCropperExampleComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ImageCropperExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LyImageCropperModule,
    LySliderModule,
    LyButtonModule,
    LyIconModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    HammerModule,
    CommonModule,
  ],
  providers: [
    [ LyTheme2 ],
    [ StyleRenderer ],
    { provide: LY_THEME_NAME, useValue: 'minima-light' },
    {
      provide: LY_THEME,
      useClass: MinimaLight,
      multi: true
    },
    {
      provide: LY_THEME,
      useClass: MinimaDark,
      multi: true
    },
    {
      provide: LY_THEME_GLOBAL_VARIABLES,
      useClass: GlobalVariables
    }, // global variables
    // Gestures
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
