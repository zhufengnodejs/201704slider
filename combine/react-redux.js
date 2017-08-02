import React from 'react';
//连接仓库中的状态和dispatch方法和老组件 ,连接仓库(store)和老组件
let connect = (mapStateToProps,mapDispatchToProps) => OldComponent => {
   class NewComponent extends React.Component{
     //从上下文中拿到store
    static contextTypes  = {
      store:React.PropTypes.object
    }
    constructor(){
      super();
    }
    componentDidMount(){
      this.setState(mapStateToProps(this.context.store.getState()));
      this.unsubscribe = this.context.store.subscribe(()=>{
        this.setState(mapStateToProps(this.context.store.getState()));
      });
    }
    componentWillUnmount(){
      this.unsubscribe();
    }

    render(){
      return <OldComponent {...mapDispatchToProps(this.context.store.dispatch)} {...this.state}/>
    }
   }
   return NewComponent;
} ;





export {connect}