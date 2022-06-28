import React from "react";

class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emp: [],
            new: '',
        }

    }

    componentDidMount() {
        fetch('https://www.breakingbadapi.com/api/characters')
            .then((response) => response.json())
            .then(empList => {
                this.setState({ emp: empList });
            });
    }
    handlechange = (e) => {
        this.setState({ new: e.target.value })
    }

    render() {
        return (

            <>
                <br /><br /><br />
                <input type="text" id="search" placeholder='Search...' onChange={this.handlechange}></input>
                <br /><br />
                <table class="table">
                    <thead class="table-primary">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.emp.filter((name) => name.name.toLowerCase().includes(this.state.new)).map((user) => (
                                <tr>
                                    <th scope="row">{user.char_id}</th>
                                    <td>{user.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default Api;




