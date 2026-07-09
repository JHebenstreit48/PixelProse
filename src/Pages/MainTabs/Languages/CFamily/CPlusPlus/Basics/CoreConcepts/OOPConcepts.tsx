import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
