import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ExpectActual = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/Multiplatform/ExpectActual';

  return (
    <>
      <PageLayout>
        <PageTitle title="expect/actual" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExpectActual;
