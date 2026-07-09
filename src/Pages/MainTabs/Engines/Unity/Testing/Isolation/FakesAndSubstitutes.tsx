import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
