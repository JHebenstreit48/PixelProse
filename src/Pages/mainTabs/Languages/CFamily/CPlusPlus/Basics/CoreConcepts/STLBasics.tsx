import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const STLBasics = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Basics/CoreConcepts/STLBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="STL Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default STLBasics;
