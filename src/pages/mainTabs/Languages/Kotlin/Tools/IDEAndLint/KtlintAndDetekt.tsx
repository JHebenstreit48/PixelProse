import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const KtlintAndDetekt = () => {
  const markdownFilePath = 'Languages/Kotlin/Tools/IDEAndLint/KtlintAndDetekt';

  return (
    <>
      <PageLayout>
        <PageTitle title="ktlint & detekt" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KtlintAndDetekt;
