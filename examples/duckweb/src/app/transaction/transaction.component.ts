import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl='https://duckcoin.charlesen.fr'

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions: any = [];
  constructor(private http: HttpClient) {
    // On récupère du contenu via une requete Http Get
    this.http.get(`${apiUrl}/transactions`).subscribe(data => {
      this.transactions = data['transactions'];
    });
    // this.transactions = [
    //   {
    //     'sender': 'charles',
    //     'recipient': 'maxime',
    //     'amount': 100,
    //   },
    //   {
    //     'sender': 'charles',
    //     'recipient': 'raphael',
    //     'amount': 100,
    //   },
    //   {
    //     'sender': 'charles',
    //     'recipient': 'doreen',
    //     'amount': 100,
    //   },
    //   {
    //     'sender': 'charles',
    //     'recipient': 'louis-joseph',
    //     'amount': 100,
    //   },
    //   {
    //     'sender': 'charles',
    //     'recipient': 'elise',
    //     'amount': 100,
    //   },
    //   {
    //     'sender': 'charles',
    //     'recipient': 'germain',
    //     'amount': 100,
    //   },
    //   {
    //     'sender': 'charles',
    //     'recipient': 'anthony',
    //     'amount': 100,
    //   },
    //   {
    //     'sender': 'charles',
    //     'recipient': 'pol',
    //     'amount': 100,
    //   },
    //   {
    //     'sender': 'charles',
    //     'recipient': 'vincent',
    //     'amount': 100,
    //   },
    //   {
    //     'sender': 'charles',
    //     'recipient': 'nicolas',
    //     'amount': 100,
    //   },
    //   {
    //     'sender': 'charles',
    //     'recipient': 'kevin',
    //     'amount': 100,
    //   },
    //   {
    //     'sender': 'charles',
    //     'recipient': 'willy',
    //     'amount': 100,
    //   },
    //   {
    //     'sender': 'charles',
    //     'recipient': 'elodie',
    //     'amount': 100,
    //   },
    //   {
    //     'sender': 'charles',
    //     'recipient': 'adrien',
    //     'amount': 100,
    //   },
    //   {
    //     'sender': 'charles',
    //     'recipient': 'romain',
    //     'amount': 100,
    //   },
    //   {
    //     'sender': 'charles',
    //     'recipient': 'quentin',
    //     'amount': 100,
    //   },
    //   {
    //     'sender': 'charles',
    //     'recipient': 'jean-etienne',
    //     'amount': 100,
    //   },
    //   {
    //     'sender': 'charles',
    //     'recipient': 'gael',
    //     'amount': 100,
    //   }
    // ];
  }

  ngOnInit() {
  }

}
