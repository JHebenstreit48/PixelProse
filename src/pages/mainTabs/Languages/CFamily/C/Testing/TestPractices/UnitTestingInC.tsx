import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
