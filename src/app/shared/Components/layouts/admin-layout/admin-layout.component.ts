import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-admin-layout',
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent {
  // isMenuOpen: boolean = false;
  // isModalVisible: boolean = false;

  // toggleModal() {
  //   this.isModalVisible = !this.isModalVisible;
  // }

  // closeMenu() {
  //   this.isMenuOpen = false;
  // }

  // confirmLogout() {
  //   console.log('User logged out');
  //   this.toggleModal();
  //   this.isMenuOpen = false;
  // }

  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
