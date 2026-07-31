import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
