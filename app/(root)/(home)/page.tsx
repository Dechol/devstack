import HomeFilters from "@/components/home/HomeFilters";
import QuestionCard from "@/components/QuestionCard";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { getQuestions } from "@/lib/actions/question.action";
import Link from "next/link";

export default async function Home() {
  const result = await getQuestions({});

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
          otherclasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherclasses="min-h-[56px] sm:min-w-[170px]"
          containerclasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((q) => (
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
