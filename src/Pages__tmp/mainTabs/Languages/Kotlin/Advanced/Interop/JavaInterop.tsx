import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const JavaInterop = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/Interop/JavaInterop';

  return (
    <>
      <PageLayout>
        <PageTitle title="Java Interop" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JavaInterop;
