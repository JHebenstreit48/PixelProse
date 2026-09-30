import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const VariablesAndDataTypes = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Basics/Fundamentals/VariablesAndDataTypes';

  return (
    <PageLayout>
      <PageTitle title="Languages - C Family - C# - Basics - Variables & Data Types" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default VariablesAndDataTypes;