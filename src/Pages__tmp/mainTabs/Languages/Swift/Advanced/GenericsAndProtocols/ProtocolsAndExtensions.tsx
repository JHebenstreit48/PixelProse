import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ProtocolsAndExtensions = () => {
  const markdownFilePath = 'Languages/Swift/Advanced/GenericsAndProtocols/ProtocolsAndExtensions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Protocols & Extensions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProtocolsAndExtensions;
