define(['./base'], function(BaseSort) {

  //main class
  return BaseSort.extend({

    name: "Quick",

    sort: function() {
      //in place sort
      this.sortAcc(0, this.a.length - 1);
    },

    sortAcc: function(left, right) {

      if(left >= right) return;

      var pivot = Math.floor((right-left)/2) + left;

      pivot = this.partition(left, right, pivot);

      this.sortAcc(left,  pivot-1);
      this.sortAcc(pivot+1, right);
    },

    partition: function(left, right, pivot) {
      
      if(this.ui.isDebug())
        console.log("quick: partition: %s [%s,%s]", this.a[pivot], left, right);
      
      this.swap(pivot, right);
      for(var i = left, s = left; i < right; ++i)
        if(this.a[i] < this.a[right])
          this.swap(i, s++);

      this.swap(s, right);
      return s;
    }

  });


});