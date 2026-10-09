import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IfStatements = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Basics/ControlFlow/IfStatements';

  return (
    <>
      <PageLayout>
        <PageTitle title="Languages - C Family - C# - Control Flow - If Statements" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IfStatements;