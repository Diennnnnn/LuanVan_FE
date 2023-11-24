import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
const T = () => {
  const arrp: number[] = []
  const [dsphong, setDsphong] = useState([
    {
      id: 0,

    },
  ])
  let x: number[] = [31]
  // let n: number
  let t: number[] = [31]
  x[0] = 1
  t[0] = 0

  let finalCombinations: any[] = []
  let currentCombination: any[] = []
  let candidates = [1, 2, 3, 4, 5, 6]
  let remainingSum: 5
  let startFrom: 0


  // const combinationSumRecursive = (candidates: string | any[], remainingSum: number, startFrom: any) => {

  //   if (remainingSum < 0) {
  //     return finalCombinations;
  //   }
  //   if (remainingSum === 0) {
  //     finalCombinations.push(currentCombination.slice());
  //     return finalCombinations;
  //   }
  //   for (let candidateIndex = startFrom; Number(candidateIndex) < Number(candidates.length); candidateIndex += 1) {
  //     const currentCandidate = candidates[candidateIndex];
  //     currentCombination.push(currentCandidate);
  //     combinationSumRecursive(candidates, remainingSum - currentCandidate, candidateIndex);
  //     currentCombination.pop();
  //   }
  //   return finalCombinations;


  // }
  let n = 5
  let a: any[] = []

  useEffect(() => {
    const show = () => {
      for (let i = 0; i < n; i++) {
        console.log(a[i])
      }
    }
    const handlee = (k: number) => {
      for (let i = 0; i <= 1; i++) {
        a[k] = i;
        if (k == n - 1) {
          show();
        }
        else {
          handlee(k + 1);
        }
      }
    }
    handlee(0)
    // const combinationSumRecursive = (candidates: string | any[], remainingSum: number,startFrom: any) => {

    //   if (remainingSum < 0) {
    //     return finalCombinations;
    //   }
    //   if (remainingSum === 0) {
    //     finalCombinations.push(currentCombination.slice());
    //     return finalCombinations;
    //   }
    //   for (let candidateIndex = startFrom; Number(candidateIndex) < Number(candidates.length); candidateIndex += 1) {
    //     const currentCandidate = candidates[candidateIndex];
    //     currentCombination.push(currentCandidate);
    //     combinationSumRecursive(candidates,remainingSum - currentCandidate,candidateIndex);
    //     currentCombination.pop();
    //   }
    //   console.log(finalCombinations , currentCombination)
    //   return finalCombinations;


    // }
    // combinationSumRecursive(candidates,remainingSum,startFrom)
  }, [])
  return (
    <div>
      <div>
        <button onClick={() => console.log(a)}>check</button>
      </div>
    </div>

  );
}
export default T;