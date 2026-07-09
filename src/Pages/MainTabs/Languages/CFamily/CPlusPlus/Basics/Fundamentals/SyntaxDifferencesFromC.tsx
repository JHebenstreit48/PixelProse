import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SyntaxDifferencesFromC = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Basics/Fundamentals/SyntaxDifferencesFromC';

  return (
    <>
      <PageLayout>
        <PageTitle title="Syntax Differences from C" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SyntaxDifferencesFromC;
