function UserEvent(){
    this.handler = {}
}
UserEvent.prototype = {
    constructor: UserEvent,
    addEvent: function(type, handler){
        if(this.handler[type] == undefined){
            this.handler[type] = [];
        }
        this.handler[type].push(handler);
    },
    triggerEvent: function(type){
        if(this.handler[type] == undefined){
            console.error('对象没有 '+ type +' 事件');
        }else{
            for(var i=0; i<this.handler[type].length; i++){
                this.handler[type][i]();
            }
        }
    },
    removeEvent: function(type){
        if(type){
            delete this.handler[type];
        }else{
            this.handler = {};
        }
    }
}