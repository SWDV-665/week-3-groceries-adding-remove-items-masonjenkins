import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [
    {
      name: "Milk"
    },
    {
      name: "Bread"
    },
    {
      name: "Eggs"
    }
  ]



  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  removeItem(item, index) {
    this.items.splice(index, 1)
  }

  addItem() {
    const prompt = this.alertCtrl.create({
      title: "Add Item",
      message: "Enter item details.",
      inputs: [
        {
          name: "name",
          placeholder: "Name"
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: "Save",
          handler: item => {
            this.items.push(item)
          }
        }
      ]
    })
    prompt.present()
  }

}
