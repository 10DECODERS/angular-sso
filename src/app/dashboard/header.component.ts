import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(public auth: AuthService) {}
  ngOnInit() {}
}
