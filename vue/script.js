var app = new Vue ({
    el:'#root',
    data:{

        newToDo:'',
        toDoList:[
            'allenamento',
            'fare esercizi Boolean',
            'fare la spesa',
            'relax'
        ]
    },
    methods:{
        addnewToDo(){
            this.toDoList.push(this.newToDo)
            this.newToDo='';
        }
    }
})