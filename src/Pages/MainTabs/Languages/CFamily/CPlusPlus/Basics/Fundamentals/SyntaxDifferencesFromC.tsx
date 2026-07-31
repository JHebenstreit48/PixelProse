import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
