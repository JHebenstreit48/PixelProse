import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BasicSubmissionFlow = () => {
  const markdownFilePath = 'Mobile/Platforms/Basics/CoreStoreConcepts/BasicSubmissionFlow';

  return (
    <>
      <PageLayout>
        <PageTitle title="Basic Submission Flow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BasicSubmissionFlow;
