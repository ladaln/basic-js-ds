const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  _root = null

  constructor() {
    this._root = null
  }

  root() {
    return this._root != null ? this._root : null
  }

  _newObject(data) {
    return {
      data: data,
      left: null,
      right: null
    }
  }

  _isCorrectObj(obj) {
    if(typeof obj != 'object') return false
    let s = new Set(Object.keys(obj))
    return s.has("data") && s.has("left") && s.has("right")
  }

  add(data) {
    if (this._root == null) {
      this._root = this._isCorrectObj(data) ? data : this._newObject(data)
    } else {
      let _data = this._isCorrectObj(data) ? data.data : data
      let _cur = this._root;
      let cur = null
      while(_cur != null) {
        cur = _cur
        if(_data > _cur.data ) {
          _cur = _cur.right
        } else if(_data < _cur.data) {
          _cur = _cur.left
        } else return
      }
      if( _data == data) {
        _data >= cur.data ? cur.right = this._newObject(data) : cur.left = this._newObject(data)
      } else {
        _data >= cur.data ? cur.right = data : cur.left = data
      }
    }
  }

  has(data) {
    return this.find(data) != null
  }

  find(data) {
    if (this._root == null) return null
  
    let _cur = this._root;
    while(_cur != null) {
      if(data > _cur.data ) {
        _cur = _cur.right
        continue
      }
      if(data < _cur.data ) {
        _cur = _cur.left
        continue
      }
      return _cur
    }
    return null
  }

  remove(data) {
    if (this._root == null) return
    let left = null
    let right = null
    if(this._root.data == data) {
      left = this._root.left
      this._root = this._root.right
    } else {
      let _cur = this._root
      while( _cur ) {
        if(_cur.right && _cur.right.data == data) break
        if(_cur.left && _cur.left.data == data) break
        if(_cur && data > _cur.data) {
          _cur = _cur.right
        } else if(_cur && data < _cur.data) {
          _cur = _cur.left
        }
        //if(_cur && data == _cur.data) throw ('ЧЕ БЛИН ЗА НАФИГ!')
      }
      if(_cur && _cur.left && data == _cur.left.data) {
        let cur = _cur.left
        _cur.left = null;
        _cur = cur
      }
      if(_cur && _cur.right && data == _cur.right.data) {
        let cur = _cur.right
        _cur.right = null;
        _cur = cur
      }
      if(data == _cur.data) {
        left = _cur.left
        right = _cur.right
      }
    }
    //left-right
    if(left) this.add(left)
    if(right) this.add(right)
    console.log(JSON.stringify(this._root))
  }

  min() {
    if(this._root == null) return null
    let _cur = this._root
    while(_cur.left) {
      _cur = _cur.left
    }
    return _cur.data
  }

  max() {
    if(this._root == null) return null
    let _cur = this._root
    while(_cur.right) {
      _cur = _cur.right
    }
    return _cur.data
  }
}

module.exports = {
  BinarySearchTree
};
