import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const OOPConcepts = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Basics/CoreConcepts/OOPConcepts';

  return (
    <>
      <PageLayout>
        <PageTitle title="OOP Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OOPConcepts;
