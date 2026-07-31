import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const FakesAndSubstitutes = () => {
  const markdownFilePath = 'Engines/Unity/Testing/Isolation/FakesAndSubstitutes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fakes & Substitutes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FakesAndSubstitutes;
