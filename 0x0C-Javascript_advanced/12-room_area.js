let roomDimensions = {
    width: 50,
    length: 100,
    getArea: function () {
      return this.width * this.length;
    }
  }
  
  let preArea = roomDimensions.getArea;
  let boundGetArea = preArea.bind(roomDimensions);