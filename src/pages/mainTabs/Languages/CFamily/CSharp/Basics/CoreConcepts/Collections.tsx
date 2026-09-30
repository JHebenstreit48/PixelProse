import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Collections = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Basics/CoreConcepts/Collections';

  return (
    <>
      <PageLayout>
        <PageTitle title="Languages - C Family - C# - Core Concepts - Collections" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Collections;