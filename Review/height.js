
class BST{
    constructor(){

    }
    HeightOftree(node=this.root,height=0){
        if(!node){
            return height;
        }
        this.HeightOftree(node.left,height+1)&this.height(node.right,height+1);
    }
}