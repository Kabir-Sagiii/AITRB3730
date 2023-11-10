import { Component } from "react";

class ClassDemo extends Component {
  componentDidMount() {
    console.log("componentDidMount is called");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps is called");
    return null;
  }
  constructor() {
    super();
    console.log("constructor is called");
  }
  render() {
    console.log("render is called");
    return (
      <div style={{ padding: "50px" }}>
        <h2 style={{ color: this.props.color }}>{this.props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          vel perspiciatis consectetur dolor perferendis fugiat veritatis quia,
          eum sit recusandae officia earum. Blanditiis earum excepturi velit
          asperiores magni quasi fuga esse, labore minima expedita. Fugiat
          maiores earum corporis dolorum nesciunt ab. Accusantium nam minus,
          totam, eum a accusamus quia obcaecati delectus libero soluta nulla,
          suscipit excepturi optio laboriosam commodi sequi porro ipsam minima?
          Cupiditate sint reiciendis dolorum obcaecati sequi blanditiis
          consectetur! Quasi odit nemo assumenda deleniti maxime debitis quidem
          ducimus molestiae, repellendus eaque ipsum saepe consectetur
          cupiditate. Voluptatibus deserunt officiis similique earum
          exercitationem nam eaque, eveniet vero itaque eum a dolorem facere
          possimus aspernatur nemo recusandae qui obcaecati maiores corrupti rem
          quam explicabo. Eaque deserunt odit reprehenderit quis consequuntur
          voluptatum doloribus laborum in, harum est officia alias ab
          praesentium aperiam iste! Vitae ipsum qui placeat voluptas velit,
          eaque quas, illo facilis unde, quos autem iusto! Corporis at, sapiente
          saepe obcaecati labore minus, voluptates architecto sed illum animi
          iure, earum accusamus. Magni vitae, facilis dolorum eos voluptatum
          pariatur perspiciatis, nostrum ut, aperiam dignissimos quibusdam culpa
          saepe quaerat? Veniam et magni id soluta ullam ipsa cupiditate, hic
          sit voluptatum tenetur error expedita! Iste dolores modi inventore
          architecto fuga. Corrupti tempore voluptates maxime?
        </p>
      </div>
    );
  }
}

export default ClassDemo;
