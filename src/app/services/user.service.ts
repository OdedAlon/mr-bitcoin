// import { StorageService } from './storage.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { of } from 'rxjs'
import { Contact } from '../models/contact.model';
import { Move } from '../models/move';
import { User } from '../models/user.model';

const USERS = [
  {
    "_id": "u101",
    "name": "Oded Alon",
    "coins": 100,
  },
  {
    "_id": "u102",
    "name": "Hallie Mclean",
    "coins": 100,
  },
  {
    "_id": "u103",
    "name": "Parsons Norris",
    "coins": 100,
  },
  {
    "_id": "u104",
    "name": "Rachel Lowe",
    "coins": 100,
  }
];

const gUsers: User[] = USERS
var loggedinUser: User = {name: 'oded', coins: 100}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //mock the server
  private _usersDb: any[] = USERS;

  private _users$ = new BehaviorSubject<User[]>([])
  public users$ = this._users$.asObservable()

  constructor() {
  }

  public loadUsers(filterBy: any = null): void {
    let users = this._usersDb;
    if (filterBy && filterBy.term) {
      users = this._filter(users, filterBy.term)
    }
    this._users$.next(this._sort(users))
  }

  public getUserById(id: string): Observable<User> {
    //mock the server work
    const user = this._usersDb.find(user => user._id === id)

    //return an observable
    return user ? of(user) : Observable.throw(`User id ${id} not found!`)
  }

  public deleteUser(id: string) {
    //mock the server work
    this._usersDb = this._usersDb.filter(user => user._id !== id)

    // change the observable data in the service - let all the subscribers know
    this._users$.next(this._usersDb)
  }

  public saveUser(user: User) {
    return user._id ? this._updateUser(user) : this._addUser(user)
  }

  private _updateUser(user: User) {
    //mock the server work
    this._usersDb = this._usersDb.map(c => user._id === c._id ? user : c)
    // change the observable data in the service - let all the subscribers know
    this._users$.next(this._sort(this._usersDb))
  }

  private _addUser(user: User) {
    //mock the server work
    const newUser = new User(null, user.name, user.coins, user.moves);
    newUser.setId();
    this._usersDb.push(newUser)
    this._users$.next(this._sort(this._usersDb))
    return newUser
  }

  private _sort(users: User[]): User[] {
    return users.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }

      return 0;
    })
  }

  private _filter(users: User[], term: any) {
    term = term.toLocaleLowerCase()
    return users.filter(user => {
      return user.name.toLocaleLowerCase().includes(term)
    })
  }

  public getLoggedinUser() {
    return loggedinUser
  }

  public login(credentials: {name: ''}) {
      var user = gUsers.find(user => user.name === credentials.name)
      // && user.password === credentials.password
      // if (user) {
      //     user = {...user}
      //     delete user.password    
      // }
      if (!user) { 
        console.log('Invalid username');
        return user;
      }
      loggedinUser = user
      // StorageService.saveToStorage('user', user)
      return user
  }

  public signup(name: '') {
    var user = gUsers.find(user => user.name === name)
    if (user) {
      console.log('Username in use');
      return user
    }
    let newUser = new User(null, name, 100, []);
    newUser = this._addUser(newUser)
    return newUser._id
  }

  public addMove(contact: Contact, amount: number) {
    const move: Move = {
      toId: contact._id,
      to: contact.name,
      at: new Date(),
      amount
    }
    if (!loggedinUser.moves) loggedinUser.moves = [move]
    else loggedinUser.moves.unshift(move)
    loggedinUser.coins = loggedinUser.coins - amount
    console.log(loggedinUser);
  }

  // public save(user: User, loggedinUserId: any = null) {
  //     var savedUser: User
  //     if (user._id) {
  //         // UPDATE
  //         savedUser = gUsers.find(currUser => currUser._id === loggedinUserId)
  //         if (savedUser) {
  //             savedUser.name = user.name
  //             savedUser.coins = user.coins
  //             savedUser.moves = user.moves
  //         } else {
  //             return 'Not your Profile'
  //         }
  //     } else {
  //         // CREATE
  //         const { name } = user;
  //         savedUser = {
  //             _id: _makeId(),
  //             fullname,
  //             username,
  //             password
  //         }
  //         savedUser.createdAt = savedUser.updatedAt = Date.now()
  //         gUsers.unshift(savedUser)
          
  //     }
  //     return _saveUsersToFile().then(() => {
  //         savedUser = {...savedUser}
  //         delete savedUser.password;
  //         return savedUser;
  //     })
  // }

  // function _saveUsersToFile() {
  //     return new Promise((resolve, reject) => {
  //         fs.writeFile('data/user.json', JSON.stringify(gUsers, null, 2), (err) => {
  //             if (err) {
  //                 console.log(err)
  //                 reject('Cannot write to file')
  //             } else {
  //                 console.log('Wrote Successfully!')
  //                 resolve()
  //             }
  //         })
  //     })
  // }
}