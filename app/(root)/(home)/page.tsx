import HomeFilters from "@/components/home/HomeFilters";
import QuestionCard from "@/components/QuestionCard";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { Filter } from "lucide-react";
import Link from "next/link";

const questions = [
  {
    _id: 1,
    title: "cascading deletes in sq",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: "john doe",
    upvotes: 10,
    views: 100,
    answers: 2,
    // createdAt: ''
  },
  {
    _id: 2,
    title: "how to center div",
    tags: [
      { _id: "1", name: "css" },
      { _id: "2", name: "sql" },
    ],
    author: "john doe",
    upvotes: 10,
    views: 100,
    answers: 2,
    // createdAt: ''
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="right"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((q) => (
            <QuestionCard
              key={q._id}
              title={q.title}
              tags={q.tags}
              author={q.author}
              upvotes={q.upvotes}
              views={q.views}
              answers={q.answers}
              createdAt={q.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="No questions to show"
            description="blahhdee blahhdaay blahhh"
            link="/"
            linkTitle="questions"
          />
        )}
      </div>
    </>
  );
}
