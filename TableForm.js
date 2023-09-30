import React,{Component} from "react";
class TableForm extends Component{
    constructor(props){
        super(props);
        this.state={
            sdata:[
                {sno:1,sname:"Ramu",subject:"maths"},
                {sno:2,sname:"Raju",subject:"science"},
                {sno:3,sname:"Ravi",subject:"social"},
            ]
        }
    };
    render(){
        const { sdata } = this.state;
        return(<div>
            <table><thead><tr>
                <th>sno</th>
                <th>sname</th>
                <th>subject</th></tr></thead>
                <tbody>
                {sdata.map((item) => (
                    <tr key={item.sno}>
                    <td>{item.sno}</td>
                    <td>{item.sname}</td>
                    <td>{item.subject}</td>
                    </tr>
                    
                ))}
                </tbody>
            </table>
        </div>);
    }
}
export default TableForm;