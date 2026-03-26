import CreateButton from "@/components/createButton";
import getVacancies from "@/lib/vacancy/getVacancies";
import VacanciesCard from "./_components/vacanciesCard";

async function VacancyPage() {
  const vacancies = await getVacancies();

  console.log("Vacancy length: ", vacancies);


  return (
    <div className="p-4">
      <div className="pb-4 flex justify-end">
        <CreateButton link={'vacancy'} />
      </div>
      <div className={'flex flex-col gap-4'}>
        {vacancies.map((vacancy: any) => (
          <VacanciesCard
            key={vacancy._id}
            link={vacancy._id}
            name={vacancy.name}
            jobType={vacancy.jobType}
            dueDate={vacancy.dueDate}
          />
        ))}
      </div>
    </div>
  );
}

export default VacancyPage;
