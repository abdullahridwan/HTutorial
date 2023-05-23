import Lottie from 'react-lottie';


const MyLottie = (props) => {
    const { animationData, size } = props;
    console.log("Hello")
    console.log(animationData)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={size}
                width={size}
            />
        </div>
    );
}

export default MyLottie;