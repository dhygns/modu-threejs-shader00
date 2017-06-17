import THREE from "n3d-threejs"
class Display {

  constructor() {

    //초기화
    this.renderer = new THREE.WebGLRenderer({alpha : true});
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.camera = new THREE.Camera();
    this.scene = new THREE.Scene();

    //Shader 작업할 Object를 추가해줍니다.
    this.object = new THREE.Object3D();
    this.object.add(new THREE.Mesh(
      new THREE.PlaneGeometry(2.0, 2.0), //기본 Geometry인 PlaneGeometry를 생성합니다.
      new THREE.ShaderMaterial({
        transparent : true,   //이 객체는 투명해질 수 있습니다.

        // Vertex Shader입니다. 정점의 위치를 정해주는 역할을 합니다.
        vertexShader : `
        void main(void) {
          gl_Position = vec4(position, 1.0);
        }
        `,

        //Fragmet Shader입니다. 각 Pixel의 색깔을 정해주는 역할을 합니다.
        fragmentShader : `
        void main(void) {
          gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
        }
        `
      })
    ));

    //만들어진 객체를 Rendering하기 위해 Scene에 넣어줍니다
    this.scene.add(this.object);

  }

  //public Function
  update() {
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

}

export default Display;
