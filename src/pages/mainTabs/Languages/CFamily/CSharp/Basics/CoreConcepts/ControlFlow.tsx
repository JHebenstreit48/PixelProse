import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ControlFlow = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Basics/CoreConcepts/ControlFlow';

  return (
    <>
      <PageLayout>
        <PageTitle title="Languages - C Family - C# - Core Concepts - Control Flow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ControlFlow;