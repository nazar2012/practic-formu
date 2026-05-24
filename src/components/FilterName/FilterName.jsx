import { Component } from "react";

class FilterName extends Component {
    render() {

        const {filter, onFilter} = this.props

        return (
            <>
                <input value={filter} onChange={onFilter} type="text" placeholder='пошук по имени' />
            </>
        )
    }
}

export default FilterName