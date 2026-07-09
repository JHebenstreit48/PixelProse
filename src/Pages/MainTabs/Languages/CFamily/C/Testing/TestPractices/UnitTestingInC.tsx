import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UnitTestingInC = () => {
  const markdownFilePath = 'Languages/CFamily/C/Testing/TestPractices/UnitTestingInC';

  return (
    <>
      <PageLayout>
        <PageTitle title="Unit Testing in C" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnitTestingInC;
