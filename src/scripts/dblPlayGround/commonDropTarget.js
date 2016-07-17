import React,{Component} from 'react'
import { DropTarget } from 'react-dnd';
import ComponentsCollection from '../components'

function getStyle(bgcolor,childs) {
  return {
    backgroundColor: bgcolor,
    position: 'relative',
    color: 'white',
    border:'1px solid gray',
    paddingBottom:10,
    borderBottom:"10px dashed gray"
  }

};

  const boxTarget = {
    drop(props, monitor, component) {
      const childName = monitor.getItem().name;
      const hasDroppedOnChild = monitor.didDrop();
      if (hasDroppedOnChild) {
        return;
      }
      // component.context.store.dispatch({
      //   type: 'CHILD_CREATE',
      //   childName:childName,
      //   childID:props.dblid
      // });
      const {childCreate} = props.actions;
      childCreate(childName,props.dblid);
  
    }
  };

 class CommonChild extends Component{
    render(){
      const { isOver, isOverCurrent,connectDropTarget,isFocus,actions } = this.props;

      let backgroundColor = '#fff',
          outline = isFocus?'3px solid green':'1px solid gray';
      if (isOverCurrent) {
        backgroundColor = 'red';
      }
      return connectDropTarget(
        <div className="common-child" 
            style={{
              backgroundColor: backgroundColor,            
              outline:outline             
            }} 
            key={this.props.key} data-dblid={this.props.dblid}
        >
          {
            !this.props.childs?"":this.props.childs.map(function(item,index,arr){
                return React.createElement(ComponentsCollection[item.childName],Object.assign({},item.props,{key:index,actions}));
              })
          }
        </div>
      )
    }
  }

CommonChild.contextTypes = {
  store:React.PropTypes.any
 } ;

 export default DropTarget('box', boxTarget, (connect,monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true })
  }))(CommonChild);