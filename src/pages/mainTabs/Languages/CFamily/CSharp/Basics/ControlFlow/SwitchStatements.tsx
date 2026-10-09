import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SwitchStatements = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Basics/ControlFlow/SwitchStatements';

  return (
    <>
      <PageLayout>
        <PageTitle title="Languages - C Family - C# - Control Flow - Switch Statements" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SwitchStatements;