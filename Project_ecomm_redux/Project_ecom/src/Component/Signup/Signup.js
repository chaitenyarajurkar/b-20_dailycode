import React, { Component } from 'react';

class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formData:{name:"",address:""},
            subMitFormData:[]

        }
        //api will not call here
    }

    componentDidMount() {
        console.log("componentDidMount")

        //api call kr skte
    }

    onChangeHandler(fieldname,value) {
        //form logic
        this.setState(prevState=>({
            ...prevState,
            formData:{...prevState.formData,[fieldname]:value}
        }))

    }

    submitHandler=(e)=>{
       e.preventDefault();
        const {formData ,subMitFormData } = this.state;
        console.log(formData);
        console.log(subMitFormData);
        debugger
       this.setState(prevState=>({
        ...prevState,
        subMitFormData:[...prevState.subMitFormData,formData],
        formData:{name:"",address:""}
       }))

    }
    render() {

        const {formData,subMitFormData} = this.state;

        const name = "code first";


        return (
            <div className='container'>
                <p>{name}</p>
                <div className='row col-4 offset-4'>
                    <form onSubmit={(e)=>this.submitHandler(e)}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" value={formData.name} onChange={(e)=>this.onChangeHandler("name",e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Address</label>
                            <input value={formData.address} onChange={(e)=>this.onChangeHandler("address",e.target.value)} type="text" class="form-control" id="exampleInputPassword1" placeholder="Address" />
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>

                </div>

                <div>
                <table class="table">
  {subMitFormData && subMitFormData.length > 0 && <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
    </tr>
  </thead>}
  <tbody>
   {
      subMitFormData && subMitFormData.length > 0 && subMitFormData.map((item,index)=>{
        return(
            <tr>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.address}</td>
          </tr>
        )
      })
   } 
  
   
  </tbody>
</table>
                </div>

            </div>
        );
    }
}

export default Signup;