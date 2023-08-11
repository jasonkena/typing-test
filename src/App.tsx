import { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/Header";
import Test from "components/Test";
import Result from "components/Result";
import Footer from "components/Footer";
import { State } from "store/reducer";
import { setTimerId } from "store/actions";
import { recordTest } from "helpers/recordTest";
import "stylesheets/themes.scss";
import CommandPallet from "components/CommandPallet";

export default function App() {
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    useEffect(() => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
                .getUserMedia({ audio: true })
                .then((stream) => {
                    console.log("getUserMedia supported.");
                    mediaRecorderRef.current = new MediaRecorder(stream);
                })
                .catch((err) => {
                    console.error(
                        `The following getUserMedia error occurred: ${err}`
                    );
                });
        } else {
            console.log("getUserMedia not supported on your browser!");
        }
    }, []); // Empty dependency array ensures this runs only on component mount

    const {
        time: { timerId, timer },
        word: { currWord, typedWord, activeWordRef },
    } = useSelector((state: State) => state);
    const dispatch = useDispatch();
    const [showPallet, setShowPallet] = useState(false);

    useEffect(() => {
        document.onkeydown = (e) => {
            if (e.ctrlKey && e.key === "k") {
                setShowPallet((s) => !s);
                e.preventDefault();
            } else if (
                e.key.length === 1 ||
                e.key === "Backspace" ||
                e.key === "Tab"
            ) {
                recordTest(e.key, e.ctrlKey);
                e.preventDefault();
            }
        };
        return () => {
            document.onkeydown = null;
        };
    }, [dispatch]);

    useEffect(() => {
        let idx = typedWord.length - 1;
        const currWordEl = activeWordRef?.current!;
        if (currWordEl) {
            currWordEl.children[idx + 1].classList.add(
                currWord[idx] !== typedWord[idx] ? "wrong" : "right"
            );
        }
    }, [currWord, typedWord, activeWordRef]);

    useEffect(() => {
        let idx = typedWord.length;
        const currWordEl = activeWordRef?.current!;
        if (currWordEl && idx < currWord.length)
            currWordEl.children[idx + 1].classList.remove("wrong", "right");
    }, [currWord.length, typedWord, activeWordRef]);

    useEffect(() => {
        if (!timer && timerId) {
            clearInterval(timerId);
            dispatch(setTimerId(null));
        }
    }, [dispatch, timer, timerId]);

    const [isRecording, setIsRecording] = useState(false);
    const [startTimestamp, setStartTimestamp] = useState<number | null>(null);
    const [recordedAudioChunks, setRecordedAudioChunks] = useState<Blob[]>([]);
    const [recordedKeypresses, setRecordedKeypresses] = useState<any[]>([]);

    useEffect(() => {
        if (isRecording) {
            const handleKeydown = (e: KeyboardEvent) => {
                const relativeTimestamp = Date.now() - (startTimestamp || 0); // unnecessary || 0
                recordedKeypresses.push({
                    type: "keydown",
                    key: e.key,
                    timestamp: relativeTimestamp,
                });
            };

            const handleKeyup = (e: KeyboardEvent) => {
                const relativeTimestamp = Date.now() - (startTimestamp || 0); // unnecessary || 0
                recordedKeypresses.push({
                    type: "keyup",
                    key: e.key,
                    timestamp: relativeTimestamp,
                });
            };

            document.addEventListener("keydown", handleKeydown);
            document.addEventListener("keyup", handleKeyup);

            return () => {
                document.removeEventListener("keydown", handleKeydown);
                document.removeEventListener("keyup", handleKeyup);
            };
        }
    }, [isRecording, startTimestamp, recordedKeypresses]);

    useEffect(() => {
        const mediaRecorder = mediaRecorderRef.current;
        if (timerId && !isRecording && mediaRecorder) {
            mediaRecorder.ondataavailable = (event) => {
                recordedAudioChunks.push(event.data);
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(recordedAudioChunks, {
                    type: "audio/wav",
                });
                const audioUrl = URL.createObjectURL(audioBlob);
                // You can use the audioUrl here to play or store the audio
                console.log(audioUrl);
                console.log(recordedKeypresses);
                setRecordedAudioChunks([]);
                setRecordedKeypresses([]);
            };
            console.log("start recording");

            mediaRecorder.start();
            setStartTimestamp(Date.now()); // Record the starting time
            setIsRecording(true);
        }

        if (!timerId && isRecording && mediaRecorder) {
            mediaRecorder.stop();
            setStartTimestamp(null);
            setIsRecording(false);
        }
    }, [
        timerId,
        isRecording,
        mediaRecorderRef,
        recordedAudioChunks,
        recordedKeypresses,
    ]);

    return (
        <>
            <Header />
            {showPallet && <CommandPallet setShowPallet={setShowPallet} />}
            {timer ? <Test /> : <Result />}
            <Footer />
        </>
    );
}
