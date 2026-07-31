import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FunctionsAndLambdas = () => {
  const markdownFilePath = 'Languages/Kotlin/Basics/FunctionsAndOOP/FunctionsAndLambdas';

  return (
    <>
      <PageLayout>
        <PageTitle title="Functions & Lambdas" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FunctionsAndLambdas;
