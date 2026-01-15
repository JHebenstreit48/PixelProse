import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BasicSubmissionFlow = () => {
  const markdownFilePath = 'Mobile/Platforms/Basics/CoreStoreConcepts/BasicSubmissionFlow';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Basic Submission Flow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BasicSubmissionFlow;
