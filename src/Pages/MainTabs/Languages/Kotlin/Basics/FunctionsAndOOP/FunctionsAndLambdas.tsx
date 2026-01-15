import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FunctionsAndLambdas = () => {
  const markdownFilePath = 'Languages/Kotlin/Basics/FunctionsAndOOP/FunctionsAndLambdas';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Functions & Lambdas" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FunctionsAndLambdas;
