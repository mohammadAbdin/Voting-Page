import { useState, useEffect } from "react";
import { candidates } from "../data";
import { getAccounts, putAccounts } from "../Api/HttpRequests";

export const UseVotingPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [candidatesData, setCandidatesData] = useState(candidates);
  const [voted, setVoted] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        setTimeout(async () => {
          const fetchedAccounts = await getAccounts();
          setAccounts(fetchedAccounts);
        }, 500);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };

    fetchAccounts();
    setEmail(JSON.parse(localStorage.getItem("email")));
  }, [voted]);

  useEffect(() => {
    const updatedCandidates = candidates.map((candidate) => {
      const votes = accounts.filter(
        (account) => account.votedTo === candidate.name
      ).length;
      return { ...candidate, vote: votes };
    });

    setCandidatesData(updatedCandidates);
  }, [accounts]);

  useEffect(() => {
    const findVoted = (email) => {
      console.log(accounts);
      const targetAccount = accounts.find((account) => {
        console.log(account.email === email);
        if (account.email === email) {
          return account;
        }
      });

      console.log(targetAccount);
      if (targetAccount != undefined) {
        setUserId(targetAccount.id);
        setPassword(targetAccount.password);
        setIsAdmin(targetAccount.isAdmin);
        console.log(userId);
        if (targetAccount.votedTo != "") {
          setVoted(targetAccount.votedTo);
          console.log(targetAccount.votedTo);
        }
      }
    };
    console.log(email);
    if (email) {
      console.log("email already");
      findVoted(email);
    }
  }, [email, accounts]);
  return {
    candidatesData,
    setCandidatesData,
    email,
    setEmail,
    voted,
    setVoted,
    handleChangeVote: () => {
      console.log(userId);
      putAccounts(userId, email, password, "", isAdmin);
      setVoted("");
    },
    handleVoting: (votedCandidate) => {
      putAccounts(userId, email, password, votedCandidate, isAdmin);
      setVoted(votedCandidate);
    },
  };
};
