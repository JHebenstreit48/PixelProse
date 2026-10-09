import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ConditionsAndComparisons = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Basics/ControlFlow/ConditionsAndComparisons';

  return (
    <>
      <PageLayout>
        <PageTitle title="Languages - C Family - C# - Control Flow - Conditions & Comparisons" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConditionsAndComparisons;